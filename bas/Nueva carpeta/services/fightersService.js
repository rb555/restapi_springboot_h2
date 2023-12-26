import callApi from '../helpers/apiHelper';

class FighterService {
    #endpoint = 'fighters.json';
    #fighterDetailsCache = new Map();

    async getFighters() {
        try {
            const apiResult = await callApi(this.#endpoint);
            return apiResult;
        } catch (error) {
            throw error;
        }
    }

    async getFighterDetails(id) {
        // todo: implement this method
        // endpoint - `details/fighter/${id}.json`;
        if (this.#fighterDetailsCache.has(id)) {
            return this.#fighterDetailsCache.get(id);
        }

        const detailsEndpoint = `details/fighter/${id}.json`;
        try {
            const detailsResult = await callApi(detailsEndpoint);

            if (detailsResult && detailsResult.status === 'success') {
                this.#fighterDetailsCache.set(id, detailsResult.data);
                return detailsResult.data;
            } else {
                throw new Error('Invalid API response for fighter details');
            }
        } catch (error) {
            throw error;
        }
      }
    }
    


const fighterService = new FighterService();

export default fighterService;
