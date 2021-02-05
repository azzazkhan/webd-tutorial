# Introduction to HTML

## What is HTML?
 HTML is a markup language used to create web pages which are visible on the Internet.

1.  HTML stands for Hypertext Markup Language
2.  HTML is a markup language not a programming language!
3.  It consists of markup tags, each tag represents a different element on a web page.
4.  Hypertext is simply a piece of text which connects two web documents using a hyperlink whereas markup language is a way of writing styles and layout information.

## HTML Elements
 HTML elements are **building blocks** of a web page, different HTML elements are used to create a proper web page. Each HTMl element is represented by a specific **markup tag**. Different elements are used for formatting and creating layouts on a web page.

## Markup Tags
Each HTML element is written using a **specific markup tag**. There are a number of tags available for different purposes. A tag is starts with a **less than** **`<`** sign followed by the **tag name** and then the **greater than** **`>`** symbol i.e. **`<tag>`**.

### **HTML Tags are not case sensitive**!
This means **`<HTML>`**, **`<html>`**, **`<HTml>`** and **`<HtMl>`** are same.


# Types of markup tags
 There are two types of markup tags:

## 1. Container Tag
 A container tag is a kind of marup tag which has an opening tag along with a closing tag. A closing tag is almost same as the opening tag. The main difference between them is that the closing tag contains a **forward slash** **`/`** before it's name i.e. **`</tag>`**.
 Anything between the opening and closing tag will said as **the content** of that tag.

### Examples:
 Some examples of container markup tags are:
 1. Bold tag (used to make text bold bewteen it) **`<b></b>`**
 2. Underline tag (used to underline the text between it) **`<u></u>`**
 3. Italic tag (used to emphasis the text between it) **`<i></i>`**


 **Note:** Once a container tag is opened it must be closed or it will cause unexpected output in the web browser!



## 2. Empty Tag
 An empty tag is little different from the container tag. It only has the opening tag and neither the closing tag nor the content. It is a good practice to add a forward slash `/` **before the greater than `>` sign** i.e. **`<tag />`**

### Examples:

 1. Image tag **`<img />`**
 2. Link tag **`<link />`**

---
# HTML Tag Attributes
HTML Tag Attributes are used to provide additional information to a specific tag. Attribtues are always written inside the opening tag. An attribute is written by typing it's name then equal to sign **`=`** followed by attribute value enclosed in double quotation marks like so  **`attribute="value"`**.

Attributes are optional.

## Example
1. Source (src) attribute contains the path to image **`<img src="..." />`**
2. Type attribute is used to determine the type of the input field **`<input type="text" />`**
4. Hypertext Reference (href) attribute is used to provide path to resource **`<link href="..." />`**
5. Class attribute is used to defined class names(s) for different visual elements **`<div class="..."></div>`**

# Some Important HTML Tags
Following are some important HTML tags that are required to build a proper web page.

## 1. The Root Tag **`<HTML>`**
This tag is used to makr the beginning and end of an HTML document. Anything between these tags is considered to be a part of a web page. When the browser reads this tag it understand that this is an HTML document. It is a container tag which wraps all other tags used in a web document.

Like ths **`<HTML>....</HTML>`**

## 2. The Head Tag **`<HEAD>`**
The head tag is used to provide meta data and information about the page. For example it may contain the the title and description of the web page which will be displayed when someone search for this web page on a search engine like Google, Bing or Yahoo.

