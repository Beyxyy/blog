import React, {useState} from 'react';
import Header from '../Components/Header';
import url from '../IMG/DSC_0853.jpg';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

const FAQ = () => {

    
        const [open, setOpen] = useState('1');
        const toggle = (id) => {
          if (open === id) {
            setOpen();
          } else {
            setOpen(id);
          }
        };
    
    
    return (
        <div>
            <Header description='Foire aux questions' title='faq' url={url}/>
            <div className='container mt-5'>
                <h2>Vous trouverez dans cette section les questions les plus récurrentes</h2>
                <div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                <AccordionHeader targetId="1">Sit enim qui magna sint dolore culpa magna consequat.</AccordionHeader>
                <AccordionBody accordionId="1">
                    Aliquip veniam exercitation quis mollit. Consectetur cupidatat culpa enim dolor nisi incididunt qui reprehenderit veniam pariatur deserunt proident consequat amet. Ad veniam aute eu qui ex qui commodo commodo consectetur voluptate. Velit in quis qui et amet qui. Esse anim cillum sunt labore est ullamco sint proident culpa labore ullamco nisi ad. Ut aute amet amet ullamco do officia mollit consectetur labore proident adipisicing non. Ad excepteur id Lorem pariatur pariatur cupidatat exercitation est dolore aliqua et ut aliquip.
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="2">Minim sit ut aute occaecat amet qui nulla eu pariatur.</AccordionHeader>
                <AccordionBody accordionId="2">
                    Enim proident voluptate sint ut quis. Deserunt sunt in veniam ex esse nisi proident aliqua fugiat. Veniam anim ad enim laboris amet mollit. Irure Lorem deserunt qui duis cillum qui duis ipsum. Cupidatat elit officia pariatur deserunt culpa laboris incididunt excepteur aliquip. Dolore incididunt tempor Lorem laborum commodo enim in ad nulla consequat quis. Nulla sint aliquip ipsum officia occaecat sunt sit exercitation.
                </AccordionBody>
                </AccordionItem>
            </Accordion>
    </div>
            </div>
        </div>
    );
};

export default FAQ;