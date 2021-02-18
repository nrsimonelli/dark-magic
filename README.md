# Theme Spike -- Getting Started

> 2-Day Sprint on front end project development

Begin this project with npx create-react-app for boiler plate & remove unnecessary features from there or clone this repository, install dependencies, and run start script of choice.


## Features & Use

The goal of this project is to provide an effecient starting point for full stack development from a front end perspective. I wanted to cut down on the time needed to create an aesthetically pleasing user experience while also avoiding the hassle of re-defining & re-naming css classes with each new endeavor.

The primary feature of this application is the theme switch that takes advantage of shared class names over multiple desired iterations. Here, I have chosen to use antd's color library and applied it to both a dark and light theme. If you wish to custom define all of your themes yourself this is something you can accomplish usings the variable method in each less file.

`root: { --your-var-name: #1809cd; }`

and later...

`style={{ color: "var(--your-var-name") }}`

To accomplish this via antd's library I am using less files and will define my shared variables there.


### less

![less](/src/static/img/code-1.png)

This way, you will be able to tranisiton between your differnt themes without having to change your css at all. The blue you picked in light mode will adjust seamlessly to dark mode due to the shared color variables in our less theme files.


### themes

A common need or desired feature for most projects is a primary theme in both dark and light modes. I have decided to arrange my spike around this idea. Here are images of each theme below:

![light](/src/static/img/light.png)

&

![dark](/src/static/img/dark.png)


### gulp

In order to switch between themes dynamically we needed to make use of gulp as well as react-switch-theme-provider. After defining our less themes and their locations in our gulpfile.js we will run `npx gulp less` to compile them into public css files that we can call upon later. It is important to note that your gulpfile.js must be in the root of your project folder and that any change you make to a less file will not take effect until you have run the npx gulp command. 

![gulp](/src/static/img/gulp.png)


### theme provider

To allow our project to make utilize the desired css file  we need to wrap our application in a theme provider. This is done in index.js as follows: 

![theme](/src/static/img/code-3.png)

Then we use a simple hook and switch to toggle between our desired themes. If you desired more one alternative theme option I would advise making use of a Select component rather than multiple Switches/Toggles.

![hook](/src/static/img/code-2.png)


## Future Development

I plan on continuing this project to tackle universal design needs that apply to any theme such as global spacing, padding, margins, typography, scaling, layout, etc.

In doing this methodically I will have a wonderful jump-off point for any project and will have effectively created my own boiler plate code that is personalized to my needs & goals


