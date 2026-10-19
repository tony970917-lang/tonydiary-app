import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content } = body;

    // 전달받은 title과 content 확인 (서버 콘솔에 출력)
    console.log('Diary Entry:', { title, content });

    // 저장 성공 응답 반환
    return NextResponse.json(
      { success: true, message: '저장 완료' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: '저장 실패' },
      { status: 500 }
    );
  }
}