<template>
  <div>
        <!-- Hero Section -->
        <section class="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative z-10 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div class="lg:w-1/2" data-aos="fade-right">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              {{ t('appDevelopment.hero.title') }}
            </h1>
            <p class="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 px-4 lg:px-0">
              {{ t('appDevelopment.hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link 
                to="/contact" 
                class="btn-primary inline-block text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                {{ t('appDevelopment.description.process.cta_button') }}            
              </router-link>
              <button 
                  @click="scrollToModels"
                  class="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm sm:text-base">
                  {{ t('home.hero.discoverServices') }}
                  <ChevronDownIcon class="ml-2 h-5 w-5 animate-bounce" />
                </button>
            </div>
          </div>
          <div class="hidden lg:block lg:w-1/2 mt-8 lg:mt-0" data-aos="fade-left">
            
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-blue-400/30 rounded-3xl blur-3xl"></div>
              
              <div class="relative bg-white/95 backdrop-blur-lg rounded-3xl p-6 lg:p-8 shadow-2xl">
                <div class="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8 mb-4 sm:mb-6">
                  <div class="text-center">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                      🌐
                    </div>
                    <div class="text-xs sm:text-sm font-semibold text-gray-800">Web</div>
                  </div>
                  <div class="text-center">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                      📱
                    </div>
                    <div class="text-xs sm:text-sm font-semibold text-gray-800">Mobile</div>
                  </div>
                  <div class="text-center">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                      💻
                    </div>
                    <div class="text-xs sm:text-sm font-semibold text-gray-800">Desktop</div>
                  </div>
                </div>
                
                <div class="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div class="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-3 sm:p-4">
                      <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600">150+</div>
                      <div class="text-xs sm:text-sm text-orange-700">Requests</div>
                    </div>
                    <div class="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-3 sm:p-4">
                      <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">4.9★</div>
                      <div class="text-xs sm:text-sm text-blue-700">Client Rating</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div class="w-10 h-8 sm:w-12 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                        <span class="text-white font-bold text-sm sm:text-base">⚡</span>
                      </div>
                      <div class="text-xs sm:text-sm font-semibold text-gray-800">2.3s</div>
                      <div class="text-xs text-gray-600">Load Time</div>
                    </div>
                    <div className="text-center">
                      <div class="w-10 h-8 sm:w-12 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                        <span class="text-white font-bold text-sm sm:text-base">📱</span>
                      </div>
                      <div class="text-xs sm:text-sm font-semibold text-gray-800">99%</div>
                      <div class="text-xs text-gray-600">Responsive</div>
                    </div>
                    <div className="text-center">
                      <div class="w-10 h-8 sm:w-12 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                        <span class="text-white font-bold text-sm sm:text-base">🚀</span>
                      </div>
                      <div class="text-xs sm:text-sm font-semibold text-gray-800">Native</div>
                      <div class="text-xs text-gray-600">Performance</div>
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
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          class="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16"
          data-aos="fade-up">
          {{ t('appDevelopment.description.title') }}
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div 
            class="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            :class="{ 'sm:col-span-2 lg:col-span-1': index === 2 }"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="h-12 w-12 sm:h-16 sm:w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{{ t('appDevelopment.description.web.title') }}</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ t('appDevelopment.description.web.description') }}</p>
          </div>

          <div 
            class="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="h-12 w-12 sm:h-16 sm:w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{{ t('appDevelopment.description.mobile.title') }}</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ t('appDevelopment.description.mobile.description') }}</p>
          </div>

          <div 
            class="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="h-12 w-12 sm:h-16 sm:w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{{ t('appDevelopment.description.software.title') }}</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ t('appDevelopment.description.software.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:flex lg:items-center lg:justify-between lg:space-x-12">
          <div class="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
            <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{{ t('appDevelopment.description.techno.title') }}</h2>
            <div class="space-y-4 sm:space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="h-10 w-10 sm:h-12 sm:w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{{ t('appDevelopment.description.techno.front') }}</h3>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="h-10 w-10 sm:h-12 sm:w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{{ t('appDevelopment.description.techno.back') }}</h3>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="h-10 w-10 sm:h-12 sm:w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{{ t('appDevelopment.description.techno.bd') }}</h3>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:w-1/2 mt-8 lg:mt-0" data-aos="fade-left">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600" 
              alt="Code development" 
              class="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          class="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16"
          data-aos="fade-up">
          {{ t('appDevelopment.description.process.title') }}
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div 
            class="text-center"
            data-aos="fade-up"
            data-aos-delay="100">
            <div class="h-12 w-12 sm:h-16 sm:w-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span class="text-lg sm:text-2xl font-bold text-primary">1</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{{ t('appDevelopment.description.process.step1') }}</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ t('appDevelopment.description.process.step1_desc') }}</p>
          </div>

          <div 
            class="text-center"
            data-aos="fade-up"
            data-aos-delay="200">
            <div class="h-12 w-12 sm:h-16 sm:w-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span class="text-lg sm:text-2xl font-bold text-primary">2</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{{ t('appDevelopment.description.process.step2') }}</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ t('appDevelopment.description.process.step2_desc') }}</p>
          </div>

          <div 
            class="text-center"
            data-aos="fade-up"
            data-aos-delay="300">
            <div class="h-12 w-12 sm:h-16 sm:w-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span class="text-lg sm:text-2xl font-bold text-primary">3</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{{ t('appDevelopment.description.process.step3') }}</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ t('appDevelopment.description.process.step3_desc') }}</p>
          </div>

          <div 
            class="text-center"
            data-aos="fade-up"
            data-aos-delay="400">
            <div class="h-12 w-12 sm:h-16 sm:w-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <span class="text-lg sm:text-2xl font-bold text-primary">4</span>
            </div>
            <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{{ t('appDevelopment.description.process.step4') }}</h3>
            <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ t('appDevelopment.description.process.step4_desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-orange-500 to-blue-600 py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 px-4">
          {{ t('appDevelopment.description.process.cta') }}
        </h2>
        <router-link 
          to="/contact" 
          class="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base">
          {{ t('appDevelopment.description.process.cta_button') }}
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