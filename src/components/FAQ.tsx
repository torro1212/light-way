import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'למי מתאים טיפול בסאונד הילינג?',
    answer: 'הטיפול מתאים לכל מי שחווה מתח, לחץ, חרדה או תחושת תקיעות, ומחפש דרך טבעית ועמוקה להירגע ולהתאזן. הצלילים של הקערות הטיבטיות פועלים על מערכת העצבים ומאפשרים הרפיה עמוקה.',
  },
  {
    question: 'האם צריך ידע קודם באומנות כדי להגיע לטיפול?',
    answer: 'ממש לא! בטיפול באומנות הדגש הוא על התהליך וההבעה הרגשית, ולא על התוצאה האסתטית. אין צורך בכישרון או ניסיון קודם ביצירה. החומרים והטכניקות הם כלי לביטוי רגשי, לא למטרות אמנותיות.',
  },
  {
    question: 'איפה מתקיימים המפגשים?',
    answer: 'הקליניקה ממוקמת בתובל 40, קומה 22, רמת גן. מגדל מודרני עם נוף מרהיב, חניה בשפע ונגישות מלאה. המקום שקט, נעים ומזמין.',
  },
  {
    question: 'מה ההבדל בין טיפול באומנות לשיחה רגילה?',
    answer: 'היצירה מאפשרת עקיפה של מנגנוני הגנה מילוליים וגישה ישירה יותר לתכנים לא מודעים ולרגשות עמוקים. לפעמים קל יותר לבטא דברים דרך צבעים, צורות וחומרים מאשר במילים.',
  },
  {
    question: 'כמה זמן נמשך תהליך טיפולי?',
    answer: 'משך התהליך משתנה מאדם לאדם ותלוי ביעדים הטיפוליים. יש מי שמגיע למספר פגישות ממוקדות, ויש תהליכים ארוכים יותר. בפגישת ההיכרות נבנה יחד תכנית שמותאמת לצרכים שלך.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Header */}
          <div className="animate-slide-up">
            <span className="inline-block text-secondary font-body text-sm tracking-widest uppercase mb-4">
              שאלות נפוצות
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
              יש לך שאלות?
              <span className="text-gradient-gold block">אני כאן לענות</span>
            </h2>
            <div className="decorative-line mb-6 !mx-0" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              אספתי כאן את השאלות הנפוצות ביותר. אם יש לך שאלה נוספת, 
              אל תהססי ליצור איתי קשר.
            </p>

            <a
              href="https://wa.me/972529706731"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex"
            >
              שאלי אותי בוואטסאפ
            </a>
          </div>

          {/* Accordion */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border-none shadow-soft overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 text-right hover:no-underline hover:bg-muted/50 transition-colors [&[data-state=open]]:bg-muted/50">
                    <span className="font-display text-lg font-medium text-foreground text-right">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
