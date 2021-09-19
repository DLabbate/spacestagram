import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AstronomyPost from "./AstronomyPost";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

const mockAstronomyPost = {
  copyright: "Gabriel Funes",
  date: "2021-07-10",
  explanation: "Cool photo...",
  hdurl: "https://apod.nasa.gov/apod/image/2107/IMG_2021_07_08_29558_APOD.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Mercury and the Da Vinci Glow",
  url: "https://apod.nasa.gov/apod/image/2107/IMG_2021_07_08_29558_APOD1024.jpg",
};

test("astronomy post should render correctly", () => {
  const astronomyPost = render(
    <AstronomyPost
      key={mockAstronomyPost.date}
      title={mockAstronomyPost.title}
      description={mockAstronomyPost.explanation}
      url={mockAstronomyPost.url}
      date={mockAstronomyPost.date}
      mediaType={mockAstronomyPost.media_type}
    />
  );

  mockAllIsIntersecting(false);

  expect(astronomyPost.getByText("July 10, 2021")).toBeTruthy();
  expect(astronomyPost.getByText(mockAstronomyPost.title)).toBeTruthy();
  expect(astronomyPost.getByText(mockAstronomyPost.explanation)).toBeTruthy();
  expect(astronomyPost.getByTestId("heart-icon")).toHaveClass("heart");
  expect(astronomyPost.getByTestId("heart-icon")).not.toHaveClass(
    "heart--active"
  );
  expect(astronomyPost.getByTestId("image-placeholder")).toBeTruthy();
});

test("astronomy post should load image", async () => {
  const astronomyPost = render(
    <AstronomyPost
      key={mockAstronomyPost.date}
      title={mockAstronomyPost.title}
      description={mockAstronomyPost.explanation}
      url={mockAstronomyPost.url}
      date={mockAstronomyPost.date}
      mediaType={mockAstronomyPost.media_type}
    />
  );

  expect(astronomyPost.getByTestId("image-placeholder")).toBeTruthy();

  mockAllIsIntersecting(true);

  fireEvent.load(astronomyPost.getByRole("img"));

  const image = astronomyPost.getByRole("img");
  expect(image).toHaveAttribute("src", mockAstronomyPost.url);
  expect(image).toHaveAttribute("alt", "NASA Astronomy");
});

test("astronomy post should be liked and unliked when clicking heart icon", () => {
  const astronomyPost = render(
    <AstronomyPost
      key={mockAstronomyPost.date}
      title={mockAstronomyPost.title}
      description={mockAstronomyPost.explanation}
      url={mockAstronomyPost.url}
      date={mockAstronomyPost.date}
      mediaType={mockAstronomyPost.media_type}
    />
  );

  fireEvent.click(astronomyPost.getByTestId("heart-icon"));
  expect(astronomyPost.getByTestId("heart-icon")).not.toHaveClass("heart");
  expect(astronomyPost.getByTestId("heart-icon")).toHaveClass("heart--active");

  fireEvent.click(astronomyPost.getByTestId("heart-icon"));
  expect(astronomyPost.getByTestId("heart-icon")).toHaveClass("heart");
  expect(astronomyPost.getByTestId("heart-icon")).not.toHaveClass(
    "heart--active"
  );
});
