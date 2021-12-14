import { render } from '@testing-library/react';

import Component204 from './component204';

describe('Component204', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component204 />);
    expect(baseElement).toBeTruthy();
  });
});
