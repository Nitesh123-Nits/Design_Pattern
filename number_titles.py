import os
import re

ROOT = r"c:\Users\nites\Downloads\Design Pattern\pages"

target_numbering = {
    # OOP Concepts
    "oop/index.html": [
        ("Encapsulation", "1. Encapsulation"),
        ("Inheritance", "2. Inheritance"),
        ("Polymorphism", "3. Polymorphism"),
        ("Abstraction", "4. Abstraction")
    ],
    # SOLID Principles
    "solid/index.html": [
        ("Single Responsibility Principle (SRP)", "1. Single Responsibility Principle (SRP)"),
        ("Open-Closed Principle (OCP)", "2. Open-Closed Principle (OCP)"),
        ("Liskov Substitution Principle (LSP)", "3. Liskov Substitution Principle (LSP)"),
        ("Interface Segregation Principle (ISP)", "4. Interface Segregation Principle (ISP)"),
        ("Dependency Inversion Principle (DIP)", "5. Dependency Inversion Principle (DIP)")
    ],
    # Creational
    "creational/singleton.html": "1. Singleton Pattern",
    "creational/factory.html": "2. Factory Method Pattern",
    "creational/abstract-factory.html": "3. Abstract Factory Pattern",
    "creational/builder.html": "4. Builder Pattern",
    "creational/prototype.html": "5. Prototype Pattern",
    # Structural
    "structural/adapter.html": "6. Adapter Pattern",
    "structural/bridge.html": "7. Bridge Pattern",
    "structural/composite.html": "8. Composite Pattern",
    "structural/decorator.html": "9. Decorator Pattern",
    "structural/facade.html": "10. Facade Pattern",
    "structural/flyweight.html": "11. Flyweight Pattern",
    "structural/proxy.html": "12. Proxy Pattern",
    # Behavioral
    "behavioral/chain-of-responsibility.html": "13. Chain of Responsibility Pattern",
    "behavioral/command.html": "14. Command Pattern",
    "behavioral/interpreter.html": "15. Interpreter Pattern",
    "behavioral/iterator.html": "16. Iterator Pattern",
    "behavioral/mediator.html": "17. Mediator Pattern",
    "behavioral/memento.html": "18. Memento Pattern",
    "behavioral/observer.html": "19. Observer Pattern",
    "behavioral/state.html": "20. State Pattern",
    "behavioral/strategy.html": "21. Strategy Pattern",
    "behavioral/template-method.html": "22. Template Method Pattern",
    "behavioral/visitor.html": "23. Visitor Pattern"
}

def clean_title(title):
    # Remove any remaining weird characters like 1⃣ and trailing special chars
    title = re.sub(r'^[0-9]+⃣?\s*', '', title)
    title = re.sub(r'^[0-9]+\.\s*', '', title)
    return title.strip()

for rel_path, replacement in target_numbering.items():
    file_path = os.path.join(ROOT, rel_path.replace("/", os.sep))
    
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # If it's a list of replacements (for OOP and SOLID which are single pages with multiple H2s)
    if isinstance(replacement, list):
        for pattern_title, new_title in replacement:
            # Look for <h2>TITLE</h2>
            # Be loose about existing numbers or weird chars
            regex = re.compile(rf'<h2[^>]*>[^<]*{re.escape(pattern_title)}[^<]*</h2>', re.IGNORECASE)
            content = regex.sub(f'<h2>{new_title}</h2>', content)
    else:
        # It's an individual pattern page with an H1
        # Match <h1>...</h1>
        match = re.search(r'<h1[^>]*>(.*?)</h1>', content)
        if match:
            # We enforce exactly the new title from the dict, since the dict has "1. Singleton Pattern" etc.
            content = re.sub(r'<h1[^>]*>.*?</h1>', f'<h1>{replacement}</h1>', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Title numbering complete.")
