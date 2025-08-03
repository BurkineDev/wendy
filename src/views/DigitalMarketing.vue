<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
          <div class="md:w-1/2" data-aos="fade-right">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
              {{ t('marketing.hero.title') }}
            </h1>
            <p class="text-xl text-white mb-8">
              {{ t('marketing.hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link 
                to="/contact" 
                class="btn-primary inline-block">
                {{ t('marketing.description.process.cta_button') }}
              </router-link>
              <button 
                  @click="scrollToModels"
                  class="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300">
                  {{ t('home.hero.discoverServices') }}
                  <ChevronDownIcon class="ml-2 h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>
          <div class="hidden md:block md:w-1/2" data-aos="fade-left">

              <div class="relative">
                <div class="relative">
                  <div class="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-blue-400/30 rounded-3xl blur-3xl"></div>
                  
                  <div class="relative bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                    <div class="flex justify-center space-x-6 mb-6">
                      <div class="text-center">
                        <div class="w-16 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-2">
                          📈
                        </div>
                        <div class="text-sm font-semibold text-gray-800">SEO</div>
                      </div>
                      <div class="text-center">
                        <div class="w-16 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-2">
                          📱
                        </div>
                        <div class="text-sm font-semibold text-gray-800">Social</div>
                      </div>
                      <div class="text-center">
                        <div class="w-16 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-2">
                          💰
                        </div>
                        <div class="text-sm font-semibold text-gray-800">Ads</div>
                      </div>
                    </div>
                    
                    <div class="space-y-6">
                      <div class="grid grid-cols-2 gap-4">
                        <div class="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-4">
                          <div class="text-3xl font-bold text-orange-600">250%</div>
                          <div class="text-sm text-orange-700">ROI Increase</div>
                        </div>
                        <div class="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-4">
                          <div class="text-3xl font-bold text-blue-600">1.2M</div>
                          <div class="text-sm text-blue-700">Monthly Reach</div>
                        </div>
                      </div>
                      
                      <div class="grid grid-cols-3 gap-3">
                        <div class="text-center">
                          <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span class="text-white font-bold">📊</span>
                          </div>
                          <div class="text-sm font-semibold text-gray-800">45%</div>
                          <div class="text-xs text-gray-600">Organic</div>
                        </div>
                        <div class="text-center">
                          <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span class="text-white font-bold">💰</span>
                          </div>
                          <div class="text-sm font-semibold text-gray-800">35%</div>
                          <div class="text-xs text-gray-600">Paid</div>
                        </div>
                        <div class="text-center">
                          <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span class="text-white font-bold">📱</span>
                          </div>
                          <div class="text-sm font-semibold text-gray-800">20%</div>
                          <div class="text-xs text-gray-600">Social</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
      <div ref="modelsSection"></div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          class="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up">
          {{ t('marketing.description.title') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100">
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('marketing.description.seo.title') }}</h3>
            <p class="text-gray-600">{{ t('marketing.description.seo.description') }}</p>
          </div>

          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200">
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('marketing.description.social.title') }}</h3>
            <p class="text-gray-600">{{ t('marketing.description.social.description') }}</p>
          </div>

          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300">
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('marketing.description.email.title') }}</h3>
            <p class="text-gray-600">{{ t('marketing.description.email.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="md:flex md:items-center md:justify-between md:space-x-12">
          <div class="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
              alt="Analyse marketing" 
              class="rounded-lg shadow-xl"
            />
          </div>

          <div class="md:w-1/2" data-aos="fade-left">
            <h2 class="text-3xl font-bold mb-6">{{ t('marketing.description.techno.title') }}</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold mb-2">{{ t('marketing.description.techno.analyze') }}</h3>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold mb-2">{{ t('marketing.description.techno.strategy') }}</h3>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold mb-2">{{ t('marketing.description.techno.optimyze') }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-orange-500 to-blue-600 py-16">
      <div 
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up">
        <h2 class="text-3xl font-bold text-white mb-8">
          {{ t('marketing.description.process.cta') }}
        </h2>
        <router-link 
          to="/contact" 
          class="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
          {{ t('marketing.description.process.cta_button') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { ref } from 'vue'

  const modelsSection = ref<HTMLElement | null>(null)

  const { t } = useI18n()

  const scrollToModels = () => {
  modelsSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.btn-primary {
  @apply bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300;
}
</style>