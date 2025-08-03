<template>
  <div>
        <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
          <div class="md:w-1/2" data-aos="fade-right">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
              {{ t('graphicDesign.hero.title') }}
            </h1>
            <p class="text-xl text-white mb-8">
              {{ t('graphicDesign.hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link 
                to="/contact" 
                class="btn-primary inline-block">
              {{ t('graphicDesign.description.process.cta_button') }}
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
              <div class="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-blue-400/30 rounded-3xl blur-3xl"></div>
              
              <div class="relative bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <div class="flex justify-center space-x-6 mb-6">
                  <div class="text-center">
                    <div class="w-16 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-2">
                      🎨
                    </div>
                    <div class="text-sm font-semibold text-gray-800">Branding</div>
                  </div>
                  <div class="text-center">
                    <div class="w-16 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-2">
                      🖥️
                    </div>
                    <div class="text-sm font-semibold text-gray-800">UI/UX</div>
                  </div>
                  <div class="text-center">
                    <div class="w-16 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-2">
                      📱
                    </div>
                    <div class="text-sm font-semibold text-gray-800">Digital</div>
                  </div>
                </div>
                
                <div class="space-y-4">
                  
                  <div class="bg-gray-50 rounded-xl p-4">
                    <h4 class="text-sm font-semibold text-gray-700 mb-3">Brand Colors</h4>
                    <div class="flex justify-center space-x-2">
                      <div class="w-8 h-8 bg-orange-500 rounded-full"></div>
                      <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
                      <div class="w-8 h-8 bg-purple-500 rounded-full"></div>
                      <div class="w-8 h-8 bg-green-500 rounded-full"></div>
                      <div class="w-8 h-8 bg-red-500 rounded-full"></div>
                    </div>
                  </div>                  
              
                  <div class="grid grid-cols-3 gap-3">
                    <div class="text-center">
                      <div class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-white font-bold">📈</span>
                      </div>
                      <div class="text-sm font-semibold text-gray-800">300%</div>
                      <div class="text-xs text-gray-600">Engagement</div>
                    </div>
                    <div class="text-center">
                      <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-white font-bold">🎯</span>
                      </div>
                      <div class="text-sm font-semibold text-gray-800">85%</div>
                      <div class="text-xs text-gray-600">Conversion</div>
                    </div>
                    <div class="text-center">
                      <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-white font-bold">⭐</span>
                      </div>
                      <div class="text-sm font-semibold text-gray-800">4.9★</div>
                      <div class="text-xs text-gray-600">Rating</div>
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
          {{ t('graphicDesign.description.title') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('graphicDesign.description.identity.title') }}</h3>
            <p class="text-gray-600">{{ t('graphicDesign.description.identity.description') }}</p>
          </div>

          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('graphicDesign.description.design.title') }}</h3>
            <p class="text-gray-600">{{ t('graphicDesign.description.design.description') }}</p>
          </div>

          <div 
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('graphicDesign.description.ux.title') }}</h3>
            <p class="text-gray-600">{{ t('graphicDesign.description.ux.description') }}</p>
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
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600" 
              alt="Design Portfolio 1" 
              class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div class="md:w-1/2" data-aos="fade-left">
            <h2 class="text-3xl font-bold mb-6">{{ t('graphicDesign.description.techno.approach') }}</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold mb-2">{{ t('graphicDesign.description.techno.design_clean') }}</h3>
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
                  <h3 class="text-lg font-semibold mb-2">{{ t('graphicDesign.description.techno.tools') }}</h3>
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
                  <h3 class="text-lg font-semibold mb-2">{{ t('graphicDesign.description.techno.optimyze') }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          class="text-3xl md:text-4xl font-bold text-center mb-16"
          data-aos="fade-up">
          {{ t('graphicDesign.description.techno.title') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div 
            class="text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('graphicDesign.description.techno.analyze') }}</h3>
            <p class="text-gray-600">{{ t('graphicDesign.description.techno.analyze_sub') }}</p>
          </div>

          <div 
            class="text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('graphicDesign.description.techno.conception') }}</h3>
            <p class="text-gray-600">{{ t('graphicDesign.description.techno.conception_sub') }}</p>
          </div>

          <div 
            class="text-center"
            data-aos="fade-up"
            data-aos-delay="300">
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('graphicDesign.description.techno.realize') }}</h3>
            <p class="text-gray-600">{{ t('graphicDesign.description.techno.realize_sub') }}</p>
          </div>

          <div 
            class="text-center"
            data-aos="fade-up"
            data-aos-delay="400">
            <div class="h-16 w-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 class="text-xl font-bold mb-4">{{ t('graphicDesign.description.techno.delivery') }}</h3>
            <p class="text-gray-600">{{ t('graphicDesign.description.techno.delivery_sub') }}</p>
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
          {{ t('graphicDesign.description.process.cta') }}
        </h2>
        <router-link 
          to="/contact" 
          class="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300">
          {{ t('graphicDesign.description.process.cta_button') }}
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