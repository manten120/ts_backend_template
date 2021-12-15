import { IncomingWebhook } from '@slack/webhook';

/* 管理者にエラーを通知する */
export const notifyAdminOfError = async (text: string) => {
  const webHookUrl = process.env.SLACK_WEBHOOK_URL_FOR_ERROR;

  if (!webHookUrl) {
    throw new Error('環境変数 SLACK_WEBHOOK_URL_FOR_ERROR が undefined です');
  }
  const webhook = new IncomingWebhook(webHookUrl);

  await webhook.send({
    text,
  });
};
