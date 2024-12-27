const features = [
  {
    icon: '🍽️',
    title: '맛집 예약',
    description: '원하는 시간에 편리하게 예약하고 특별한 식사를 즐기세요.',
  },
  {
    icon: '📊',
    title: '소비 분석',
    description:
      '나의 외식 소비 패턴을 한눈에 파악하고 현명한 소비를 실천하세요.',
  },
  {
    icon: '⭐',
    title: '리뷰 관리',
    description: '방문한 맛집에 대한 솔직한 리뷰를 공유하고 관리하세요.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-3xl text-[#FF6B3D] mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
