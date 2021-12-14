import { render } from '@testing-library/react';

import Icon120 from './icon120';

describe('Icon120', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon120 />);
    expect(baseElement).toBeTruthy();
  });
});
