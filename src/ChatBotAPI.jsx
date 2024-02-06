const API = {
  GetChatbotResponse: async (message) => {
    return new Promise(function (resolve) {
      setTimeout(function () {
        const formattedMessage = message.trim().toLowerCase();

        if (formattedMessage === "hi") {
          resolve(<p>Welcome to RudramGPT!</p>);
        } else if (formattedMessage === "hello") {
          resolve(<p>Hello,Welcome to RudramGPT!</p>);
        } else if (
          formattedMessage === "rudram solutions" ||
          formattedMessage === "about rudram solutions"
        ) {
          resolve(
            <div style={{ textAlign: "justify" }}>
              <h4>
                Transforming the landscape of data solutions into a reality.
              </h4>
              <p >
                Welcome to Rudram Data Solutions, a pioneer in data-driven
                solutions that aims to serve users to streamline data-related
                problems with the adoption of advanced technologies to fuel
                their business to the next level.
              </p>

              <p>
                We are a fleet of highly qualified and skilled data scientists
                working together with a holistic approach towards transforming
                raw data into actionable insights for your company.
              </p>
              <p>
                At Rudram, we understand the importance of data as a resource
                for your business and are dedicated to conserve your time,
                money, and effort.
              </p>
            </div>
          );
        } else if (
          formattedMessage === "what rudram solutions do?" ||
          formattedMessage === "what rudram solutions do" ||
          formattedMessage === "what are rudram solutions experties"
        ) {
          resolve(
            <div>
              <p>Rudram Solutions Expertise includes</p>
              <ul style={{ textAlign: "left" }}>
                <li>Data Science</li>
                <li>Machine Learning </li>
                <li>Data Analysis </li>
                <li>DaaS (Data as a Service)</li>
              </ul>
            </div>
          );
        } else if (
          formattedMessage === "what services rudram solutions give?" ||
          formattedMessage === "services of rudram solutions"
        ) {
          resolve(
            <div>
              <p>Rudram Solutions Services includes</p>
              <ul style={{ textAlign: "left" }}>
                <li>Data Collection</li>
                <li>Process Automation using Machine Learning and AI</li>
                <li>Custom Data Services </li>
                <li>Data Analytics and Reporting</li>
                <li>Data Governance</li>
                <li>Data Migration</li>
                <li>Business Intelligence</li>
                <li>Data Mining</li>
                <li>Master Data Management(MDM)</li>
              </ul>
            </div>
          );
        } else {
          resolve(<p> No Data Found </p>);
        }
      }, 2000);
    });
  },
};

export default API;
