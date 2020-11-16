import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

let date = new Date();

module.exports = createLogger({
    // format: format.combine(
    //     timestamp(),
    //     myFormat,
    //     format.colorize()
    // ),
    format: format.combine(format.simple()),
    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 10,
            filename: `${__dirname}/../logs/log-api.log`,
            
        }),
    ]
})