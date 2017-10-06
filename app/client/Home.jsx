import React from 'react';
import { Button, LinkButton, Page, PageHeader, MainContent } from 'MODULES/shared/components/Layout';

export default function Home() {
  return (
    <Page>
      <PageHeader>
        <h1>Letters From The Earth</h1>
      </PageHeader>
      <MainContent>
        <div>
          <LinkButton to="/letters/choose">
            Start New Letter
          </LinkButton>
        </div>
        <p>
          Do you Need Help Writing a Letter? If so, You’ve Come to the Right Place!
        </p>
        <p>
          Greetings from the Earth! A place where most of the inhabitants are not particularly good at writing letters. If you are not a good letter writer, you are in the majority. And in this informal world we live in, usually a very casual approach will do just fine. But sometimes it won’t. If you are reading this, you probably already have such an occasion in mind.
        </p>
        <p>
          Fear Not! We at Letters from Earth love writing letters and we are very good at it (if we do say so ourselves). We have an excellent grasp on grammar but also understand the value of not having a letter sound stilted. In other words, we will keep “to whom” “from which” “therefrom” and other awkward sounding phrases from appearing too often in your letter.
        </p>
        <p>
          You are always in charge! We write the letters but they are nothing more than a suggestion. Once your letter arrives, it is your decision to send it as is, alter it as you like, or just not send it. We will not compose letters containing vulgarity, profanity, hate speech, etc. But once you get the letter, you are free to make it a bit more colorful if you like. Please also be aware that we are not lawyers and do not give legal advice. Sometimes there is just no substitute to a letter from a lawyer.
        </p>
        <p>
          We will give you a list of the most frequent requests that we get. But feel free to request any kind of letter you need. And if you are not happy with the first draft, just let us know and we will give you one rewrite at no extra charge.
        </p>
      </MainContent>
    </Page>
  )
}
