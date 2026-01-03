import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Sparkles, MessageCircle } from "lucide-react";
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const faqs = [
  {
    question: 'למי מתאימה התוכנית הקבוצתית?',
    answer: 'לכל אישה שאובחנה כחולה במחלה אוטואימונית או אישה שמרגישה שזה הזמן לעצור, להקשיב לעצמה ולבחור בדרך אחרת. אם משהו בתוכך אומר "אני צריכה זמן לעצמי" או "אני רוצה להבין מה באמת קורה בי" – זה המקום. התוכנית מתאימה לנשים שמחפשות תהליך עמוק ומתמשך במרחב בטוח ותומך.',
  },
  {
    question: 'מה ההבדל בין טיפול אישי לתוכנית הקבוצתית?',
    answer: 'בטיפול אישי זה רק את ואני, בקצב שלך ובמרחב פרטי לגמרי. בתוכנית הקבוצתית יש את הכוח של המעגל – ההקשבה, השיתוף, וההבנה שאת לא לבד. הקבוצה מציעה תהליך מובנה של 10 חודשים עם מפגשים שבועיים, כלים נלמדים, וליווי מקצועי מתמשך. שני המסעות יפים, והבחירה תלויה במה שאת צריכה עכשיו.',
  },
  {
    question: 'כמה עולה התוכנית?',
    answer: 'מחיר התוכנית משתנה בהתאם למספר המשתתפות ולפרטים הספציפיים. בשיחת היכרות אישית נדבר על כל הפרטים, כולל אפשרויות תשלום והתאמה אישית. חשוב לי שכל אישה שמרגישה שזה המקום שלה תוכל למצוא את הדרך להצטרף.',
  },
  {
    question: 'מה קורה אם אני צריכה להחסיר מפגש?',
    answer: 'אני מבינה שהחיים קורים. התוכנית בנויה על מחויבות, אבל גם על גמישות והבנה. במקרים של היעדרות, נמצא דרך לעדכן אותך ולשמור על ההמשכיות שלך בתהליך. חשוב לי שכל משתתפת תרגיש שיש לה מקום ותמיכה, גם כשהחיים מאתגרים.',
  },
  {
    question: 'איך נראה מפגש בתוכנית הקבוצתית?',
    answer: 'כל מפגש הוא שונה ומותאם לתהליך הקבוצתי. יש מפגשים של שיחה עמוקה ושיתוף, מפגשים עם כלי נגינה תרפוייטים, תדרי ריפוי וצלילים מרפאים, תרגולי נשימה והרפיה, ועבודה תודעתית. המפגשים נמשכים 3 שעות (18:00-21:00). המבנה משלב תיאוריה, תרגול, וחוויה אישית וקבוצתית.',
  },
  {
    question: 'האם צריך ניסיון קודם?',
    answer: 'בכלל לא. לא צריך שום ניסיון, לא צריך להכין כלום, לא צריך להיות "מוכנה". רק להגיע עם הנכונות להקשיב לעצמך ולהיות חלק מתהליך קבוצתי. השאר יגיע בזמן שלו, במהלך 10 החודשים של המסע המשותף.',
  },
  {
    question: 'מתי מתחילה התוכנית הבאה?',
    answer: 'התוכניות מתחילות במחזורים. כדי לדעת מתי המחזור הבא מתחיל ולשמור מקום, כדאי ליצור איתי קשר בוואטסאפ. הקבוצות סגורות ומוגבלות ל-10 משתתפות בלבד, כך שחשוב לתאם מראש.',
  },
];

const FAQ = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="faq" className="section-padding bg-cream/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      
      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto px-4 md:px-0">
          {/* Header */}
          <div 
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className="text-center mb-16 md:mb-20 space-y-4 md:space-y-6"
          >
            <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 hover:scale-105 transition-all duration-500 cursor-default ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <MessageCircle className="w-4 h-4 text-secondary" />
              <span className="text-secondary font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">
                שאלות נפוצות
              </span>
              <Sparkles className="w-3 h-3 text-secondary/60" />
            </div>
            <h2 className={`font-display text-3xl md:text-6xl font-bold text-foreground leading-tight transition-all duration-1000 delay-300 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              אני כאן לכל <span className="text-gradient-gold italic inline-block hover:scale-105 transition-transform duration-500 cursor-default">שאלה נוספת</span>
            </h2>
            <div className={`decorative-line mx-auto relative overflow-hidden transition-all duration-1000 delay-500 ${headerVisible ? 'opacity-100 w-16' : 'opacity-0 w-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          </div>

          {/* Modern Accordion */}
          <div className="space-y-4 md:space-y-6">
            <Accordion type="single" collapsible className="w-full space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-secondary/10 rounded-[1.5rem] md:rounded-[2rem] px-6 md:px-8 py-1 md:py-2 overflow-hidden transition-all duration-500 data-[state=open]:shadow-2xl data-[state=open]:border-secondary/30 data-[state=open]:scale-[1.02] hover:border-secondary/20 hover:shadow-card relative group/item"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 data-[state=open]:from-secondary/5 data-[state=open]:to-transparent transition-all duration-700 pointer-events-none" />
                  <AccordionTrigger className="hover:no-underline group relative z-10">
                    <div className="flex items-center justify-between w-full text-right gap-4 md:gap-6">
                      <span className="font-display text-lg md:text-2xl font-bold text-foreground group-hover:text-secondary transition-all duration-500 leading-tight">
                        {faq.question}
                      </span>
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-secondary/20 flex items-center justify-center shrink-0 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-secondary group-data-[state=open]:border-secondary transition-all duration-500 group-hover:scale-110 group-hover:border-secondary/40">
                        <Plus className="w-4 h-4 md:w-5 md:h-5 text-secondary group-data-[state=open]:text-white transition-colors duration-500" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 md:pt-4 pb-6 md:pb-8 text-muted-foreground text-base md:text-lg leading-relaxed font-body relative z-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still Have Questions? */}
          <div className="mt-16 md:mt-20 flex flex-col items-center gap-6 md:gap-8 p-8 md:p-12 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-secondary/10 text-center hover:shadow-2xl hover:scale-[1.02] hover:border-secondary/20 transition-all duration-700 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-transparent transition-all duration-1000" />
            <p className="font-display text-xl md:text-2xl text-foreground font-bold group-hover:text-secondary transition-colors duration-500 relative z-10">יש לך שאלה שלא מופיעה כאן?</p>
            <a
              href="https://wa.me/972526172932"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-4 px-10 py-4 md:px-12 md:py-5 text-base md:text-lg group/btn w-full sm:w-auto relative z-10 hover:scale-110 transition-all duration-500 ripple-effect"
            >
              <MessageCircle className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-500" />
              <span className="group-hover/btn:tracking-wider transition-all duration-300">שאלי אותי בוואטסאפ</span>
              <div className="w-6 md:w-8 h-[1px] bg-white/50 group-hover/btn:w-12 transition-all duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
