import { render } from '@testing-library/react';

import Component28 from './component28';

describe('Component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component28 />);
    expect(baseElement).toBeTruthy();
  });
});
