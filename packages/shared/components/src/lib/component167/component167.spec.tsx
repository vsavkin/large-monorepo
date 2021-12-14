import { render } from '@testing-library/react';

import Component167 from './component167';

describe('Component167', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component167 />);
    expect(baseElement).toBeTruthy();
  });
});
