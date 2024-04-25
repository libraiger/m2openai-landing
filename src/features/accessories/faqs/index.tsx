import S from "./index.module.scss";
import { Item } from "./item";
import { useState } from 'react';

export const Faqs = () => {
  const items = [
    {
      header : "Is Sharly only available in English?", 
      content : "Sharly helps to chat with PDF and docs in over 20+ languages, with chatGPT accuracy"
    }, 
    {
      header : "Which types of documents Sharly supports?", 
      content : "You can upload and chat with PDF, PDF with OCR, but also .doc .txt .csv .rtf .html (via scraping)"
    }, 
    {
      header : "How can I subscribe to Sharly?", 
      content : "We support all payments through our partner, Stripe. All cards are welcome."
    }, 
    {
      header : "Why Sharly makes me 10x faster?", 
      content : "Sharly makes you 10x faster by quickly summarize and analyze precise information you need from any document, eliminating the time-consuming task of manual search and reading. Additionally allows you to cross-reference multiple documents simultaneously."
    }, 
  ]
  const [active, setActive] = useState([false, false, false, false]);

  const handleItemClick = (index:number) => {
    setActive(prevState => {
      const updatedActive = [...prevState];
      updatedActive[index] = !updatedActive[index];
      return updatedActive;
    })
  }
  return (
    <div className={S.body}>
      <h1>Frequently asked questions</h1>
      <div className={S.wrapper}>
        {
          items.map((item, index)=>(
            <Item key={index} $active={active[index]} $header={item.header} $content={item.content} onClick={()=> handleItemClick(index)}/>
          ))
        }
      </div>
    </div>
  );
};
