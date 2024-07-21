<h1>REST API with H2 Database using Spring Boot</h1>

<p>This project is a REST API that connects to an H2 database using Spring Boot.</p>

<h2>Features</h2>
<ul>
  <li><span style="color:green">RESTful API with CRUD operations</span></li>
  <li><span style="color:blue">In-memory H2 database for testing and development</span></li>
  <li><span style="color:purple">Spring Data JPA for database interaction</span></li>
  <li><span style="color:orange">Maven for dependency management</span></li>
</ul>

<h2>Prerequisites</h2>
<ul>
  <li><span style="color:red">Java 11 or higher</span></li>
  <li><span style="color:brown">Maven 3.6.3 or higher</span></li>
</ul>

<h2>Dependencies</h2>
<p>The following dependencies are included in the <code>pom.xml</code>:</p>
<ul>
  <li><span style="color:teal">Spring Web</span></li>
  <li><span style="color:gold">Spring Dev Tools</span></li>
  <li><span style="color:magenta">H2 Database</span></li>
  <li><span style="color:gray">Spring Data JPA</span></li>
</ul>

<h2>Getting Started</h2>
<h3>Clone the Repository</h3>
<pre><code>git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
</code></pre>

<h3>Build the Project</h3>
<pre><code>mvn clean install
</code></pre>

<h3>Run the Application</h3>
<pre><code>mvn spring-boot:run
</code></pre>
<p>The application will start on <code>http://localhost:8080</code>.</p>

<h2>Usage</h2>
<h3>API Endpoints</h3>
<p>Here are some example endpoints for the <code>USERS</code> table:</p>
<ul>
  <li><code>GET /api/users</code> - Retrieve all users</li>
  <li><code>GET /api/users/{id}</code> - Retrieve a specific user by ID</li>
  <li><code>POST /api/users</code> - Create a new user</li>
  <li><code>PUT /api/users/{id}</code> - Update an existing user by ID</li>
  <li><code>DELETE /api/users/{id}</code> - Delete a user by ID</li>
</ul>

<h3>Example Requests</h3>

<h4>GET /api/users</h4>
<pre><code>curl -X GET http://localhost:8080/api/users
</code></pre>

<h4>POST /api/users</h4>
<pre><code>curl -X POST http://localhost:8080/api/users -H "Content-Type: application/json" -d '{"name": "New User", "email": "user@example.com"}'
</code></pre>

<h2>H2 Console</h2>
<p>You can access the H2 database console at <code>http://localhost:8080/h2-console</code>. Use the following settings:</p>
<ul>
  <li><strong>JDBC URL</strong>: <code>jdbc:h2:mem:testdb</code></li>
  <li><strong>Username</strong>: <code>sa</code></li>
  <li><strong>Password</strong>: <em>(leave blank)</em></li>
</ul>

<h2>Contributing</h2>
<p>If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.</p>

<h2>License</h2>
<p>This project is licensed under the Apache License 2.0 - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2>Acknowledgements</h2>
<ul>
  <li>Spring Boot documentation</li>
  <li>H2 Database documentation</li>
</ul>


