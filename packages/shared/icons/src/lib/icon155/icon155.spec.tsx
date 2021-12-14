import { render } from '@testing-library/react';

import Icon155 from './icon155';

describe('Icon155', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon155 />);
    expect(baseElement).toBeTruthy();
  });
});
