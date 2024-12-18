export default function OfferPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Договор оферты</h1>
        <div className="prose max-w-none">
          <p>
            Здесь содержится текст договора оферты. Этот договор определяет
            условия и положения использования нашего сервиса.
          </p>

          <h2>1. Общие положения</h2>
          <p>
            1.1. Настоящий документ является публичной офертой и содержит все
            существенные условия договора на оказание услуг.
          </p>
          <p>
            1.2. В соответствии с пунктом 2 статьи 437 Гражданского Кодекса
            Российской Федерации, в случае принятия изложенных ниже условий и
            оплаты услуг, юридическое или физическое лицо, производящее акцепт
            этой оферты, становится Заказчиком.
          </p>

          <h2>2. Предмет договора</h2>
          <p>
            2.1. Предметом настоящего договора является предоставление
            Исполнителем услуг Заказчику на условиях настоящей оферты.
          </p>
          <p>
            2.2. Настоящий договор является официальным предложением Исполнителя
            к заключению договора оказания услуг и содержит все существенные
            условия договора оказания услуг.
          </p>
        </div>
      </main>
    </div>
  );
}
