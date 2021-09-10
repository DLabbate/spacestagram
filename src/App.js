import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="w-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="w-auto m-5 shadow-lg rounded-2xl ">
          <img
            className="object-cover rounded-t-2xl w-full"
            src={"https://apod.nasa.gov/apod/image/1612/ngc6357_nasa_3600.jpg"}
          />
          <div className="m-6">
            <h3>Image from NASA</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              porta ante cursus elit hendrerit fermentum. Sed a interdum orci.
              Fusce efficitur dolor metus, eu condimentum ipsum placerat
              pretium. Etiam id neque et quam ultrices dapibus. Suspendisse
              aliquet velit eu cursus vestibulum. Vestibulum erat purus,
              sollicitudin sit amet odio eu, ultricies commodo diam. Donec
              finibus, nunc id consequat tincidunt, lorem augue pharetra mauris,
              eget tristique lectus mi non velit. Donec et efficitur mauris. Nam
              sit amet erat vitae purus pharetra tincidunt sed quis risus
            </p>
          </div>
        </div>
        <div className="w-auto m-5 shadow-lg rounded-2xl">
          <img
            className="object-cover rounded-t-2xl w-full"
            src={
              "http://astronomy.com/~/media/4E3C7BCA32FA42EA81D5FA6049FBB707.jpg"
            }
          />
          <div className="m-6">
            <h3>Image from NASA</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              porta ante cursus elit hendrerit fermentum. Sed a interdum orci.
              Fusce efficitur dolor metus, eu condimentum ipsum placerat
              pretium. Etiam id neque et quam ultrices dapibus. Suspendisse
              aliquet velit eu cursus vestibulum. Vestibulum erat purus,
              sollicitudin sit amet odio eu, ultricies commodo diam. Donec
              finibus, nunc id consequat tincidunt, lorem augue pharetra mauris,
              eget tristique lectus mi non velit. Donec et efficitur mauris. Nam
              sit amet erat vitae purus pharetra tincidunt sed quis risus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
