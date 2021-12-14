import { render } from '@testing-library/react';

import Component145 from './component145';

describe('Component145', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component145 />);
    expect(baseElement).toBeTruthy();
  });
});
