import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AstronomyPost from "./AstronomyPost";

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

const addLike = jest.fn();
const removeLike = jest.fn();

test("astronomy post should render correctly (not liked)", () => {
  const astronomyPost = render(
    <AstronomyPost
      key={mockAstronomyPost.date}
      title={mockAstronomyPost.title}
      description={mockAstronomyPost.explanation}
      url={mockAstronomyPost.url}
      date={mockAstronomyPost.date}
      liked={false}
      addLike={addLike}
      removeLike={removeLike}
      mediaType={mockAstronomyPost.media_type}
    />
  );

  expect(astronomyPost.getByText("July 10, 2021")).toBeTruthy();
  expect(astronomyPost.getByText(mockAstronomyPost.title)).toBeTruthy();
  expect(astronomyPost.getByText(mockAstronomyPost.explanation)).toBeTruthy();
  expect(astronomyPost.getByTestId("heart-icon")).toHaveClass("heart");
  expect(astronomyPost.getByTestId("heart-icon")).not.toHaveClass(
    "heart--active"
  );
  expect(astronomyPost.getByRole("img")).toHaveAttribute(
    "src",
    mockAstronomyPost.url
  );
});

test("astronomy post should render correctly (liked)", () => {
  const astronomyPost = render(
    <AstronomyPost
      key={mockAstronomyPost.date}
      title={mockAstronomyPost.title}
      description={mockAstronomyPost.explanation}
      url={mockAstronomyPost.url}
      date={mockAstronomyPost.date}
      liked={true}
      addLike={addLike}
      removeLike={removeLike}
      mediaType={mockAstronomyPost.media_type}
    />
  );

  expect(astronomyPost.getByText("July 10, 2021")).toBeTruthy();
  expect(astronomyPost.getByText(mockAstronomyPost.title)).toBeTruthy();
  expect(astronomyPost.getByText(mockAstronomyPost.explanation)).toBeTruthy();
  expect(astronomyPost.getByTestId("heart-icon")).toHaveClass("heart--active");
  expect(astronomyPost.getByRole("img")).toHaveAttribute(
    "src",
    mockAstronomyPost.url
  );
});

test("astronomy post should call addLike callback", () => {
  const astronomyPost = render(
    <AstronomyPost
      key={mockAstronomyPost.date}
      title={mockAstronomyPost.title}
      description={mockAstronomyPost.explanation}
      url={mockAstronomyPost.url}
      date={mockAstronomyPost.date}
      liked={false}
      addLike={addLike}
      removeLike={removeLike}
      mediaType={mockAstronomyPost.media_type}
    />
  );

  fireEvent.click(astronomyPost.getByTestId("heart-icon"));
  expect(addLike).toHaveBeenCalledTimes(1);
});

test("astronomy post should call removeLike callback", () => {
  const astronomyPost = render(
    <AstronomyPost
      key={mockAstronomyPost.date}
      title={mockAstronomyPost.title}
      description={mockAstronomyPost.explanation}
      url={mockAstronomyPost.url}
      date={mockAstronomyPost.date}
      liked={true}
      addLike={addLike}
      removeLike={removeLike}
      mediaType={mockAstronomyPost.media_type}
    />
  );

  fireEvent.click(astronomyPost.getByTestId("heart-icon"));
  expect(removeLike).toHaveBeenCalledTimes(1);
});
