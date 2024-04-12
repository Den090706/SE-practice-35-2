class CardRandomizer{

    get imagesAndTexts() {
        return [
            { image: 'images/cards/Ближній_бій.png', cover:"images/covers/Фіолетовий.png", text: 'Ця карта означає негайну необхідність діяти або реагувати.', index: 0},
            { image: 'images/cards/Голограма.png', cover:"images/cards/Жовтий.png", text: 'Чи бачите ви справжню картину? Чи лише віддзеркалення... Істина може бути складнішою ніж здалось на перший погляд.', index: 1 },
            { image: 'images/cards/Дрономатка.png', cover:"images/cards/Зелений.png", text: 'Ця карта означає здатність піднятися вище, щоб побачити ширший контекст ситуації. Можливе використання технологій або механізмів для досягнення мети.', index: 2 },
            { image: 'images/cards/Піджак.png', cover:"images/cards/Синій.png", text: 'Ви здатні керувати ситуацією і мати вплив на інших. Необхідні обдумані дії та стратегічний підхід до рішень.', index: 3 },
        ];
    }

    getRandomElement(removeIndexes) {
        if(removeIndexes == null){
            removeIndexes = [];
        }
        let remainingCards = this.imagesAndTexts.filter(card => !removeIndexes.includes(card.index));
        const randomIndex = Math.floor(Math.random() * remainingCards.length);
        return remainingCards[randomIndex];
    }
}