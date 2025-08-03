<template>
  <footer class="bg-gray-900 text-white pt-12 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-2xl font-bold text-primary mb-4">Wendy</h3>
          <p class="text-gray-400">
            {{ t('contact.info.subtitle') }}
          </p>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">{{ t('footer.services') }}</h4>
          <ul class="space-y-2">
            <li><router-link to="/technical-support" class="text-gray-400 hover:text-primary">{{ t('services.support') }}</router-link></li>
            <li><router-link to="/app-development" class="text-gray-400 hover:text-primary">{{ t('services.development') }}</router-link></li>
            <li><router-link to="/graphic-design" class="text-gray-400 hover:text-primary">{{ t('services.graphicDesign') }}</router-link></li>
            <li><router-link to="/digital-marketing" class="text-gray-400 hover:text-primary">{{ t('services.digitalMarketing') }}</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">{{ t('footer.contact') }}</h4>
          <ul class="space-y-2 text-gray-400">
            <li>{{ t('contact.info.phone') }}: +1 (418) 264-7068</li>
            <li>{{ t('contact.info.email') }}: info@wendync.com</li>
          </ul>
        </div>

      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Wendy. {{ t('footer.rights') }}.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>