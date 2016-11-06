describe('SM Parser', () => {
    let smParser;
    beforeEach(() => {
        smParser = require('../../src/parsers/sm-parser');
    });

    it('parses header tags', () => {
        const sm = smParser.parse(['#TITLE:some-title', '#SUBTITLE:some-subtitle', ''].join(';\n'));
        expect(sm.TITLE).toBe('some-title');
        expect(sm.SUBTITLE).toBe('some-subtitle');
    });

    it('parses chart tags', () => {
        const sm = smParser.parse(['#NOTES:\n\tNOTE_DATA_1', '#NOTES:\n\tNOTE_DATA_2', '#NOTES:\n\tNOTE_DATA_3', ''].join(';\n'));
        expect(Array.isArray(sm.NOTES)).toBeTruthy();
        expect(sm.NOTES.length).toBe(3);
        expect(sm.NOTES[0]).toBe('NOTE_DATA_1');
        expect(sm.NOTES[1]).toBe('NOTE_DATA_2');
        expect(sm.NOTES[2]).toBe('NOTE_DATA_3');
    });
});