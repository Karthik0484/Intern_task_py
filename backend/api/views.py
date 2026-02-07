from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_facts(request):
    facts_list = [
        "Django is a high-level Python web framework.",
        "React is a JavaScript library for building user interfaces.",
        "DRF makes building Web APIs simple and flexible.",
        "Full-stack developers handle both frontend and backend."
    ]
    return Response(facts_list)
