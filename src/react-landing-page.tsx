import React from 'react';
import { ArrowRight, CheckCircle, Users, Clock, Zap } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
        <Icon className="w-12 h-12 text-green-500 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
    </div>
);

const Testimonial = ({ quote, author, role }) => (
    <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
        <p className="italic mb-4">"{quote}"</p>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
    </div>
);

const ComparisonRow = ({ feature, traditional, psg }) => (
    <tr>
        <td className="border px-4 py-2">{feature}</td>
        <td className="border px-4 py-2">{traditional}</td>
        <td className="border px-4 py-2 font-semibold text-green-600">{psg}</td>
    </tr>
);

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Context Generator</h1>
                    <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                        Download Now
                    </a>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <section className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                        AIと開発者の架け橋
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        生成AIを活用する開発者のための究極のプロジェクト要約ツール
                    </p>
                    <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-flex items-center">
                        始めましょう
                        <ArrowRight className="ml-2" />
                    </a>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">主な機能</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Feature
                            icon={Zap}
                            title="ワンクリック要約"
                            description="複雑なプロジェクト構造を1つのマークダウンファイルに集約"
                        />
                        <Feature
                            icon={Users}
                            title="AIとの効率的な対話"
                            description="プロジェクトのコンテキストを瞬時にAIへ伝達"
                        />
                        <Feature
                            icon={CheckCircle}
                            title="マルチプロジェクト対応"
                            description="プロジェクトごとの設定を自動保存"
                        />
                        <Feature
                            icon={Clock}
                            title="時間の節約"
                            description="AIへのプロジェクト説明時間を80%削減"
                        />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">開発者の声</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Testimonial
                            quote="Context Generatorのおかげで、AIとのコミュニケーションが劇的に改善しました。プロジェクトの説明時間が1/5になり、より本質的な開発作業に集中できています。"
                            author="Taro"
                            role="Senior Developer"
                        />
                        <Testimonial
                            quote="複数のプロジェクトを並行して進めていますが、このツールのおかげで各プロジェクトの切り替えがスムーズになりました。AIとの対話の質も向上し、開発速度が約2倍になった感覚です。"
                            author="Hanako"
                            role="Full-stack Engineer"
                        />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">従来の方法との比較</h2>
                    <table className="w-full border-collapse border">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2">課題</th>
                                <th className="border px-4 py-2">従来の方法</th>
                                <th className="border px-4 py-2">Context Generator</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ComparisonRow feature="プロジェクト説明時間" traditional="30分以上" psg="5分以内" />
                            <ComparisonRow feature="AIの理解度" traditional="部分的" psg="全体的" />
                            <ComparisonRow feature="複数プロジェクト管理" traditional="煩雑" psg="簡単" />
                            <ComparisonRow feature="設定の再利用" traditional="困難" psg="自動化" />
                            <ComparisonRow feature="チーム内共有" traditional="時間がかかる" psg="即時可能" />
                        </tbody>
                    </table>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        AIとの開発を最適化する準備はできましたか？
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Context Generatorで、あなたの開発プロセスを革新しましょう。
                    </p>
                    <a href="https://github.com/noricha-vr/ContextGenerator" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-flex items-center">
                        今すぐダウンロード
                        <ArrowRight className="ml-2" />
                    </a>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; 2023 Context Generator. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
