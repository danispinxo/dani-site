const questions = [
  {
    question: 'What is convention over configuration?',
    answer:
      "Convention over configuration is a principle in Rails that helps simplify development by setting up sensible defaults. Instead of needing to configure everything manually, Rails assumes certain things based on naming and structure. For instance, if I create a model called Post, Rails will expect a database table named posts, and it will also know where to find the corresponding controller and views. I don't need to set that up unless I want to change the defaults. As someone still growing in the field, I really appreciate this because it helps me focus on writing the core logic of the app rather than spending a lot of time on setup. It also makes it easier to jump into existing Rails projects because the structure is predictable and consistent.",
  },
  {
    question: "What's the difference between .save and .save!",
    answer:
      "save and save! both attempt to save a model instance to the database, but the difference is in how they handle failure. save returns true if the save succeeds and false if it fails — like when validations don't pass. It fails silently, meaning it won't raise an error. save!, on the other hand, does the same thing, but if the save fails, it will raise an exception — specifically, an ActiveRecord::RecordInvalid error if validations fail. I use save when I want to handle failures gracefully, and save! when I want to be alerted right away, like during development or when debugging. It helps catch problems early because it won't let the issue pass quietly.",
  },
  {
    question: 'What is a scope?',
    answer:
      'A scope in Rails is a way to define reusable, query logic for your models. It allows you to encapsulate commonly used queries into a method-like structure that can be called on the model. Scopes are defined in the model using the `scope` method or as class methods. For example, if you have a Post model and want to filter published posts, you could define a scope like this: `scope :published, -> { where(published: true) }`. Then, you can call `Post.published` to get all published posts. Scopes make your code cleaner and more maintainable by keeping query logic centralized in the model.',
  },
  {
    question: 'What is the difference between `has_one` and `belongs_to`?',
    answer:
      'The `has_one` and `belongs_to` associations in Rails define relationships between models. `belongs_to` is used on the model that holds the foreign key, indicating that it is the child in the relationship. For example, if a User has one Profile, the Profile model would have `belongs_to :user`. On the other hand, `has_one` is used on the parent model to indicate that it has exactly one associated child. In the same example, the User model would have `has_one :profile`. Essentially, `belongs_to` sets up the relationship from the perspective of the child, while `has_one` sets it up from the perspective of the parent.',
  },
  {
    question: 'What is the difference between `render` and `redirect_to`?',
    answer:
      '`render` is used to display a specific view template without making a new HTTP request. For example, `render :show` will render the `show` view for the current controller. `redirect_to`, on the other hand, sends an HTTP redirect to the browser, instructing it to make a new request to a different URL or action. For example, `redirect_to posts_path` will redirect the user to the index page of posts. Use `render` when you want to display a view in the same request and `redirect_to` when you want to navigate to a different action or URL.',
  },
  {
    question: 'What is the difference between `before_action` and `after_action`?',
    answer:
      '`before_action` and `after_action` are controller callbacks in Rails. `before_action` is executed before a controller action runs, and it is often used for tasks like authentication or setting up instance variables. For example, `before_action :authenticate_user` ensures the user is logged in before accessing certain actions. `after_action`, on the other hand, is executed after a controller action has run, and it is commonly used for tasks like logging or cleaning up resources. Both callbacks help keep your controller code DRY and organized.',
  },
  {
    question: 'What is the difference between `pluck` and `select`?',
    answer:
      '`pluck` is used to retrieve specific columns directly from the database as an array, bypassing the creation of ActiveRecord objects. For example, `User.pluck(:email)` returns an array of email addresses. `select`, on the other hand, retrieves full ActiveRecord objects and allows you to specify which columns to include in the query. For example, `User.select(:id, :email)` returns ActiveRecord objects with only the `id` and `email` attributes loaded. Use `pluck` when you only need raw data and `select` when you need ActiveRecord objects.',
  },
  {
    question: 'What is the difference between `dependent: :destroy` and `dependent: :delete_all`?',
    answer:
      '`dependent: :destroy` and `dependent: :delete_all` are options used in Rails associations to specify what happens to associated records when a parent record is deleted. `dependent: :destroy` calls the `destroy` method on each associated record, triggering callbacks like `before_destroy` and `after_destroy`. `dependent: :delete_all`, on the other hand, deletes the associated records directly from the database without calling callbacks. Use `dependent: :destroy` when you need to execute callbacks and `dependent: :delete_all` for better performance when callbacks are not needed.',
  },
  {
    question: 'What is the difference between `has_many` and `has_and_belongs_to_many`?',
    answer:
      'Has many is a one to many relationship. For example, you might have a User table that has_many: posts. So, each Post would have one User, but a User could have many Posts. `has_and_belongs_to_many` refers to a many-to-many relationship where, for example, Author and Book models might have a has_and_belongs_to_many many-to-many relationship and Rails will implicitly generate a join table based on the names, so in this case it would be called authors_books but you can customize it by generating a migration and creating a join table',
  },
  {
    question: 'What is the purpose of the `config/application.rb` file?',
    answer:
      'The `config/application.rb` file in a Rails application is used to configure application-wide settings. It defines the application class, which inherits from `Rails::Application`, and includes settings like time zone, default locale, and middleware. This file is loaded when the application starts and serves as the central place for configuring the Rails framework and its components.',
  },
  {
    question: 'What is the purpose of the `schema.rb` file?',
    answer:
      'The `schema.rb` file in Rails is an auto-generated file that represents the current state of the database schema. It is updated whenever you run migrations and serves as a snapshot of the database structure, including tables, columns, indexes, and constraints. The `schema.rb` file is useful for understanding the database schema without needing to inspect the database directly and can be used to recreate the database schema in a new environment.',
  },
  {
    question: 'What is the difference between `gem` and `bundle`?',
    answer:
      '`gem` is a command-line tool used to install and manage Ruby gems, which are libraries or packages of Ruby code. For example, you can use `gem install rails` to install the Rails gem. `bundle`, on the other hand, is a tool provided by Bundler that manages gem dependencies for your application. It uses a `Gemfile` to specify the required gems and their versions, and `bundle install` ensures that all dependencies are installed and compatible. Bundler helps maintain a consistent environment across different systems.',
  },
  {
    question: 'What is the difference between `development`, `test`, and `production` environments in Rails?',
    answer:
      'Rails provides three default environments: `development`, `test`, and `production`. The `development` environment is used during application development and includes features like detailed error messages and code reloading. The `test` environment is used for running automated tests and is configured to use a separate test database. The `production` environment is optimized for performance and security, with features like caching and precompiled assets. Each environment has its own configuration file in the `config/environments` directory.',
  },
  {
    question: 'What is the asset pipeline in Rails?',
    answer:
      'The asset pipeline in Rails is a framework that provides a way to concatenate, minify, and serve JavaScript, CSS, and image files in a Rails application. It allows you to organize your assets in the `app/assets`, `lib/assets`, or `vendor/assets` directories and use the `manifest` files to include them. The pipeline also supports preprocessing, such as converting SCSS to CSS or CoffeeScript to JavaScript. This helps improve performance by reducing the number of HTTP requests and optimizing asset delivery.',
  },
  {
    question: 'What is the difference between `find_each` and `each`?',
    answer:
      '`find_each` is a method provided by ActiveRecord to iterate over large datasets in batches, reducing memory usage. It retrieves records in chunks (default size is 1000) and processes them one batch at a time. This is useful for operations on large tables. On the other hand, `each` loads all records into memory at once, which can lead to memory issues when dealing with large datasets. Use `find_each` for batch processing and `each` for smaller datasets.',
  },
  {
    question: 'What is the difference between `includes` and `joins`?',
    answer:
      '`includes` is used for eager loading associations to avoid the N+1 query problem by loading associated records in advance. For example, `Post.includes(:comments)` loads posts and their associated comments in fewer queries. `joins`, on the other hand, performs an SQL join to combine data from multiple tables but does not load associated records into memory. Use `includes` when you need to access associated records and `joins` when you need to filter or query based on associated data.',
  },
];

export { questions };
