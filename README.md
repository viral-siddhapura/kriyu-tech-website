# Kriyu Tech Website

This repository contains the source code for the Kriyu Tech website. It's a static website built using HTML, CSS, and JavaScript.

## Repository Structure

- `index.html`: The main entry point of the website. This file contains the structure of the homepage.
- `contact_us.html`: The contact us page HTML code which contains forms, validations, footer and navigation bar section.
- `about.css`: Contains information about Kriyu Tech about section.
- `service.css`: Describes the services css designs offered by Kriyu Tech.
- `card.css`: Describes the cards css designs and all changeable.
- `contact_us_page.css`: Provides contact information and a contact form css designs.
- `style.css`: The main stylesheet for the website - like body, background color, etc.
- `fotter.css`: footer section css design.
- `navbar.css`: Provides navigation and hamburger menu css design with responsiveness of the UI.
- `partners.css`: The partners css design for partners list.
- `script.js`: Directory containing JavaScript files - logic contains for scrolling, validatingForms(), sendingEmail(), clearFormFields() after validation is done, and other basic functionalitites.

## How to Modify

### Changing Content

To update the content of the website:

1. Open the relevant HTML file (e.g., `index.html`) in a text editor.
2. Find the comment for each section (e.g., `navbar section starts here`) and change HTML content.
3. Save the file and refresh your browser to see the changes.

### Modifying Styles

To change the appearance of the website:

1. Open `style.css` in a text editor.
2. Find the relevant CSS selector for the element you want to style.
3. Modify the CSS properties as needed.
4. Save the file and refresh your browser to see the changes.

### Updating Images

To change or add images:

1. Place the entire svg formated code - into the `index.html` page itself.

## Deployment

To make changes in AWS S3 Static website:

1. Login into the AWS account.
2. Find the AWS S3 service and locate the bucket of your website.
3. Upload the changed files (e.g., `index.html`, `partners.css` or any files that has changes) to your S3 bucket.
4. After you see, `Success` message - go to properties -> Static website hosting -> copy the URL / open the URL.

## Send Email Service update if required

1. We are using EmailJS as a free sending email to the kriyu-tech business.
2. Login using the below credentials:
3. Email - viralsid2330@gmail.com
4. Password - $%D36rKY+JE$4zx
5. Update the Gmail Service in `Email service` section if there is any update and all set.
