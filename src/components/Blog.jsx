import React from "react";
import { Document, Page, Text } from '@react-pdf/renderer';
import PDF from '../../public/blog.pdf'
import { FaDownload } from "react-icons/fa";


const Blog = () => {

    // pdf download funtion
    const createPdf = () => (
        <Document>
          <Page>
            <Text>{PDF}</Text>
          </Page>
        </Document>
      );

      const handleDownload = () => {
        const pdfBlob = new Blob([createPdf()], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'hello.pdf';
        document.body.appendChild(link);
        link.click();
      };
      

  return (
    <div className="mx-2 lg:mx-12">
        <button className="mt-8" onClick={handleDownload}><FaDownload></FaDownload></button>
      <h2 className="text-red-500 text-3xl text-center font-bold my-6">
        Blog Page
      </h2>
      <div className="p-4 bg-gray-200 rounded my-2">
    
        <h3 className="font-bold mb-2">1.Differences between uncontrolled and controlled components.</h3>
        <p>
          Controlled components refer to components that have their state and
          behavior controlled by the parent component. These components rely on
          props passed down from the parent component to update their state and
          behavior. Uncontrolled components refer to components that manage
          their own state internally.
        </p>
      </div>
      <div className="p-4 bg-gray-200 rounded my-2">
        <h3 className="font-bold mb-2">2.How to validate React props using PropTypes</h3>
        <p>
          Properties validation is a useful way to force the correct usage of
          the components. This will help during development to avoid future bugs
          and problems, once the app becomes larger. It also makes the code more
          readable, since we can see how each component should be used.Some
          exmple-
          <br /> 1.any : The prop can be of any data type. <br />
          2.bool : The prop should be a Boolean. <br />
          3.number : The prop should be a number. <br />
          4.string : The prop should be a string. <br />
          5.func : The prop should be a function. <br />
          6.array : The prop should be an array. <br />
          7.object : The prop should be an object.
        </p>
      </div>
      <div className="p-4 bg-gray-200 rounded my-2">
        <h3 className="font-bold mb-2">3.difference between nodejs and express js.</h3>
        <p>
          Node.js is a run-time environment created to run JavaScript on the
          server side.
          <br /> <br />
          Express.js is a framework for Node.js, so in order to use it, you will
          use Node.js anyway. Express.js will help you organize your application
          better. It provides many features which will speed up the development
          for example mechanism for middlewares, more efficient REST support or
          robust routing.
        </p>
      </div>
      <div className="p-4 bg-gray-200 rounded my-2">
        <h3 className="font-bold mb-2">4.What is a custom hook, and why will you create a custom hook?</h3>
        <p>
          Custom Hooks are functions. Usually, they start with the word “use”.
          Unlike a React component, a custom Hook doesn’t need to have a
          specific signature. We can decide what it takes as arguments, and
          what, if anything, it should return. In other words, it’s just like a
          normal function Custom Hooks allow us to access the React ecosystem in
          terms of hooks, which means we have access to all the known hooks like
          useState, useMemo, useEffect, etc. This mechanism enables the
          separation of logic and view. <br />
          Why I use custom hook: <br />
          When I have component logic that needs to be used by multiple
          components, we can extract that logic to a custom Hook.we are fetching
          data in my Home component and displaying it. I will use the
          JSONPlaceholder service to fetch fake data. This service is great for
          testing applications when there is no existing data. To learn more,
          check out the JavaScript Fetch API section.
        </p>
      </div>
    </div>
  );
};

export default Blog;
