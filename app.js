const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

const token = '6285405520:AAEkgWXRjzS-VSpSzFcFMbj3PI0yOD56rLg'; // Ваш токен Telegram бота
const chatId = 1844492266; // Ваш ідентифікатор чату

function sendReminder() {
  const bot = new TelegramBot(token, { polling: false });
  const message = 'Сьогодні час взяти таблетку!';
  bot.sendMessage(chatId, message);
}

// Запланувати нагадування щодня о 8:30 ранку
cron.schedule('30 7 * * *', () => {
  sendReminder();
}, { timezone: 'Europe/Kiev' }); // Адаптуйте часовий пояс відповідно до свого розташування

console.log('Бот працює...');
