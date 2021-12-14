import { render } from '@testing-library/react';

import Component161 from './component161';

describe('Component161', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component161 />);
    expect(baseElement).toBeTruthy();
  });
});
