<template>
  <!-- Hero Section -->
  <div>
    <section class="relative py-20 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center" data-aos="fade-up">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            {{ t('contact.hero.title') }}
          </h1>
          <p class="text-xl text-white mb-8 max-w-3xl mx-auto">
            {{ t('contact.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Informations de contact -->
          <div data-aos="fade-right">
            <div class="sticky top-24">
              <h2 class="text-3xl font-bold mb-8">{{ t('contact.info.title') }}</h2>
              <p class="text-gray-600 mb-12">
                {{ t('contact.info.subtitle') }}
              </p>

              <div class="space-y-8">
                <!-- Téléphone -->
                <div class="flex items-start space-x-4">
                  <div class="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold mb-1">{{ t('contact.info.phone') }}</h3>
                    <a href="tel:+14182647068" class="text-gray-600 hover:text-primary transition-colors">
                      +1 (418) 264-7068
                    </a>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start space-x-4">
                  <div class="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold mb-1">{{ t('contact.info.email') }}</h3>
                    <a href="mailto:info@wendync.com" class="text-gray-600 hover:text-primary transition-colors">
                      info@wendync.com
                    </a>
                  </div>
                </div>

                <!-- Horaires -->
                <div class="flex items-start space-x-4">
                  <div class="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold mb-1">{{ t('contact.info.hours.title') }}</h3>
                    <p class="text-gray-600">
                      {{ t('contact.info.hours.weekdays') }}<br>
                      {{ t('contact.info.hours.support') }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Réseaux sociaux -->
              <div class="mt-12">
                <h3 class="text-lg font-semibold mb-4">{{ t('contact.info.social') }}</h3>
                <div class="flex space-x-4">
                  <a href="#" class="h-10 w-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" class="h-10 w-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulaire de contact -->
          <div data-aos="fade-left">
            <div class="bg-white rounded-2xl p-8 shadow-xl">
              <h2 class="text-2xl font-bold mb-6">{{ t('contact.form.title') }}</h2>
              <form class="space-y-6">
                <!-- Nom -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.form.name') }}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    class="input-primary"
                    :placeholder="t('contact.form.namePlaceholder')"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.form.email') }}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    class="input-primary"
                    :placeholder="t('contact.form.emailPlaceholder')"
                  />
                </div>

                <!-- Sujet -->
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.form.subject') }}</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    class="select-primary"
                  >
                    <option value="">{{ t('contact.form.subjectPlaceholder') }}</option>
                    <option value="cyber-security">{{ t('services.support') }}</option>
                    <option value="web-development">{{ t('services.development') }}</option>
                    <option value="graphic-design">{{ t('services.graphicDesign') }}</option>
                    <option value="digital-marketing">{{ t('services.digitalMarketing') }}</option>
                    <option value="other">{{ t('contact.form.other') }}</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.form.message') }}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    class="input-primary"
                    :placeholder="t('contact.form.messagePlaceholder')"
                  ></textarea>
                </div>

                <!-- Bouton d'envoi -->
                <button 
                  type="submit" 
                  class="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <span>{{ t('contact.form.send') }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 
            class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-600 mb-4" 
            data-aos="fade-up"
          >
            {{ t('contact.faq.title') }}
          </h2>
          <p 
            class="text-xl text-gray-600" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            {{ t('contact.faq.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="(question, key) in faqQuestions" 
            :key="key"
            class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="question.delay"
          >
            <!-- Background Pattern -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Content -->
            <div class="relative">
              <div class="flex items-start space-x-4">
                <div class="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <component 
                    :is="question.icon" 
                    class="h-6 w-6 text-primary group-hover:text-orange-600 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {{ t(`contact.faq.questions.${key}.title`) }}
                  </h3>
                  <p class="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {{ t(`contact.faq.questions.${key}.answer`) }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-orange-500/5 rounded-tl-full transform translate-x-12 translate-y-12 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  QuestionMarkCircleIcon, 
  WrenchScrewdriverIcon 
} from '@heroicons/vue/24/outline'

const { t } = useI18n()

const faqQuestions = {
  response: {
    icon: ClockIcon,
    delay: "100"
  },
  process: {
    icon: QuestionMarkCircleIcon,
    delay: "200"
  },
  pricing: {
    icon: CurrencyDollarIcon,
    delay: "300"
  },
  support: {
    icon: WrenchScrewdriverIcon,
    delay: "400"
  }
}
</script>

<style scoped>
.btn-primary {
  @apply bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300;
}
</style>