import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';

export async function GET() {
    try {
        const user = await currentUser();

        if (!user) {
            return NextResponse.json({ isAdmin: false });
        }

        const adminEmails = process.env.ADMIN_EMAILS?.split(',').map(email => email.trim()) || [];
        const userEmail = user.emailAddresses[0]?.emailAddress;
        const isAdmin = userEmail && adminEmails.includes(userEmail);

        return NextResponse.json({ isAdmin });
    } catch (error) {
        return NextResponse.json({ isAdmin: false });
    }
}
