<template>
  <footer class="bg-gray-900 text-white pt-8 sm:pt-12 pb-6 sm:pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div>
          <h3 class="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Wendy</h3>
          <p class="text-sm sm:text-base text-gray-400 leading-relaxed">
            {{ t('contact.info.subtitle') }}
          </p>
        </div>
        
        <div>
          <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{{ t('footer.services') }}</h4>
          <ul class="space-y-2">
            <li><router-link to="/technical-support" class="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">{{ t('services.support') }}</router-link></li>
            <li><router-link to="/app-development" class="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">{{ t('services.development') }}</router-link></li>
            <li><router-link to="/graphic-design" class="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">{{ t('services.graphicDesign') }}</router-link></li>
            <li><router-link to="/digital-marketing" class="text-sm sm:text-base text-gray-400 hover:text-primary transition-colors">{{ t('services.digitalMarketing') }}</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{{ t('footer.contact') }}</h4>
          <ul class="space-y-2 text-sm sm:text-base text-gray-400">
            <li>
              <span class="block sm:inline">{{ t('contact.info.phone') }}:</span>
              <a href="tel:+14182647068" class="text-gray-400 hover:text-primary transition-colors">+1 (418) 264-7068</a>
            </li>
            <li>
              <span class="block sm:inline">{{ t('contact.info.email') }}:</span>
              <a href="mailto:info@wendync.com" class="text-gray-400 hover:text-primary transition-colors">info@wendync.com</a>
            </li>
          </ul>
        </div>
        
        <div class="sm:col-span-2 lg:col-span-1">
          <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{{ t('footer.followUs') }}</h4>
          <div class="flex space-x-4">
            <a href="#" class="h-8 w-8 sm:h-10 sm:w-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
              <svg class="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" class="h-8 w-8 sm:h-10 sm:w-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
              <svg class="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
      
      <div class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-400">
        <p class="text-sm sm:text-base">&copy; {{ new Date().getFullYear() }} Wendy. {{ t('footer.rights') }}.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>