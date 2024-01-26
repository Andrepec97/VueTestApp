<template>
  <main>
    <div>
      <h1>Anagrafiche</h1>
      <router-link to="/anagrafiche/new">
        <base-button type="button" mode="primary">Nuova Anagrafica</base-button>
      </router-link>
    </div>
    <table>
      <thead>
      <tr>
        <th>Nome</th>
        <th>Cognome</th>
        <th>Indirizzo</th>
        <th>CAP</th>
        <th>Città</th>
        <th>Provincia</th>
        <th>Telefono</th>
        <th>Email</th>
        <th>Partita IVA</th>
        <th>Codice Fiscale</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="anagrafica in anagrafiche" :key="anagrafica.id">
        <td>{{ anagrafica.nome }}</td>
        <td>{{ anagrafica.cognome }}</td>
        <td>{{ anagrafica.indirizzo }}</td>
        <td>{{ anagrafica.cap }}</td>
        <td>{{ anagrafica.citta }}</td>
        <td>{{ anagrafica.provincia }}</td>
        <td>{{ anagrafica.telefono }}</td>
        <td>{{ anagrafica.email }}</td>
        <td>{{ anagrafica.partita_iva }}</td>
        <td>{{ anagrafica.codice_fiscale }}</td>
        <td>
          <!--          <router-link :to="{ name: 'AnagraficheEdit', params: { id: anagrafica.id } }">Edit</router-link>-->
          <!--          <button @click="deleteAnagrafica(anagrafica.id)">Delete</button>-->
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="11">Totale Anagrafiche: {{ countAnagrafiche }}</td>
      </tr>
      </tfoot>
    </table>
  </main>
</template>
<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: 'AnagraficheList',
  components: {
    BaseButton
  },
  data() {
    return {
      anagrafiche: [
        {
          id: 1,
          nome: 'Mario',
          cognome: 'Rossi',
          indirizzo: 'Via Roma 1',
          cap: '00100',
          citta: 'Roma',
          provincia: 'RM',
          telefono: '3331234567',
          email: 'andrea@andrea.it',
          codice_fiscale: 'RSSMRA80A01H501T',
          partita_iva: '12345678901'
        },
        {
          id: 2,
          nome: 'Mario',
          cognome: 'Rossi',
          indirizzo: 'Via Roma 1',
          cap: '00100',
          citta: 'Roma',
          provincia: 'RM',
          telefono: '3331234567',
          email: 'andrea@andrea.it',
          codice_fiscale: 'RSSMRA80A01H501T',
          partita_iva: '12345678901'
        }
      ],
    };
  },
  computed: {
    countAnagrafiche() {
      return this.anagrafiche.length;
    },
  },
  methods: {},
};
</script>
<style scoped>
main {
  background-color: white;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
}

main div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 4px;
}

table thead tr th {
  color: black;
  padding: 1rem;
  text-align: left;
}

table thead tr th {
  border-bottom: 1px solid black;
}

table tbody tr td {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

table tfoot tr td {
  padding: 1rem;
}

table tbody tr td:last-child {
  text-align: right;
}

table tbody tr td a {
  color: #0d6efd;
  text-decoration: none;
}

table tbody tr td a:hover {
  text-decoration: underline;
}

table tbody tr td button {
  background-color: transparent;
  border: none;
  color: #0d6efd;
  cursor: pointer;
}

table tbody tr td button:hover {
  text-decoration: underline;
}

table tbody tr td:last-child button {
  margin-left: 1rem;
}

table tbody tr td:last-child button:last-child {
  margin-left: 0;
}

table tbody tr td:last-child button:hover {
  text-decoration: none;
}

table tbody tr td:last-child button:focus {
  outline: none;
}

table tbody tr td:last-child button:active {
  outline: none;
}

table tbody tr td:last-child button:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:active:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:active:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:active:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:active:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:active:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:active:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:active:focus-visible {
  outline: 1px solid #0d6efd;
}

table tbody tr td:last-child button:focus-visible {
  outline: 1px solid #0d6efd;
}

</style>