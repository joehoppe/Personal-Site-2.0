import React from 'react';
import Card from '../Card/Card.js'

class CardList extends React.Component {
  constructor(props) {
    super(props);

    const cards = [
      {
        date: "September 22, 2016",
        text: `Implemented a TypeScript outFile for a simple form of cache busting! I.e. "outFile": "./build / build_1.0.001.js".
                <br />Upgraded to Angular 1.5.8!`
      },
      {
        date: "August 10, 2016",
        text: `Switched hosting providers from AppHarbor to an Azure web app!
        <br />Launched <a href="http://hoppe.apphb.com/" target="blank" title="my first Node.js app on AppHarbor">my first Node.js app on AppHarbor</a>! It’s a couple landing pages that provide links to the new Azure app, which you are using now.
        <br />Added an <a href="http://www.josephhoppe.com/AboutMe" title="About Me">About Me page </a>!`
      }, 
      {
        date: "July 12, 2016",
        text: `Replaced Bower with NPM!`
      }, 
      {
        date: "May 11, 2016",
        text: `Linted the site with TSLint!`
      }, 
      {
        date: "April 18, 2016",
        text: `Enabled HTML 5 mode routing! Not interested in supporting < IE11.
        <br />Migrated much of the site's JS to TypeScript 1.8!`
      }, 
      {
        date: "November 9, 2015",
        text: `Disabled Angular debugInfo to improve performance!`
      }, 
      {
        date: "October 29, 2015",
        text: `Wrote my first LESS, and compiled it with Gulp!
        <br />Vetted it with JSCS and JSHint, all thanks to John Papa’s course on JavaScript Build Automation with Gulp.js!`
      }, 
      {
        date: "August 27, 2015",
        text: `Upgraded to Angular 1.4.4! 
        <br />Added a Bootstrap stylesheet from Bootswatch as well.
        <br />Mocked out this backend using ngMock.`
      }, 
      {
        date: "April 10, 2015",
        text: `Wrote my first AngularJS plugin module! Find Angular Errors on Toast on Github.`
      }, 
      {
        date: "November 20, 2014",
        text: `I&rsquo;ve been looking long and hard for great resources for application architects. There appears to be a great shortage. But I did find one good one: <a
          href="http://highscalability.com/" target="blank" title="highscalability.com">highscalability.com</a>. I recommend checking it out. They seem to have great articles on improving performance and designing software.`
      }, 
      {
        date: "November 7, 2014",
        text: `<a href="https://stackoverflow.com/users/846844/hoppe" target="blank" title="My StackOverflow profile">Earned 1,000+ reputation</a> on StackOverflow today!`
      }, 
      {
        date: "October 14, 2014",
        text: `Redid the site using Bower 1.3 as a package manager! 
        <br />Implemented a rough Angular CDN failback mechanism. 
        <br />Loving the Visual Studio SideWaffle templates!`
      }, 
      {
        date: "May 22, 2014",
        text: `I told my manager that I was learning AngularJS. He asked me to demo what I had done to him and my teammates. Bored them to death! :)`
      }, 
      {
        date: "May 21, 2014",
        text: `Launched an AngularJS 1.2 site! Also built on:
        <ul>
          <li>MVC 5.1 (MVC was later dropped)</li>
          <li>Bootstrap 3</li>
          <li>Google Analytics</li>
        </ul>`
      }
    ];

    this.cardsElements = cards.map((card, index) =>
      <Card key={index} date={card.date} text={card.text} />
    );
  }

  render() {
    return (
      <div className="container">
        {this.cardsElements}
      </div>
    );
  }
}

export default CardList