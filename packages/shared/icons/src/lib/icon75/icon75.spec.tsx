import { render } from '@testing-library/react';

import Icon75 from './icon75';

describe('Icon75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon75 />);
    expect(baseElement).toBeTruthy();
  });
});
