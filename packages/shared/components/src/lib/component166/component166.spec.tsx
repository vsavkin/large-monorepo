import { render } from '@testing-library/react';

import Component166 from './component166';

describe('Component166', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component166 />);
    expect(baseElement).toBeTruthy();
  });
});
