import { createTransport } from 'nodemailer';

export default async (req, res) => {
    const transporter = createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: 'recipe.mori@gmail.com', // 使用するGoogleアカウントを指定
            pass: 'lhnmbberonzovpoi', // Googleアカウントで設定
        },
    });
    await transporter.sendMail({
        from: 'recipe.mori@gmail.com',
        to: 'recipe.mori@gmail.com',
        subject: 'お問い合わせ',
        text: req.body,
    });

    res.status(200).json({
        success: true,
    });
};