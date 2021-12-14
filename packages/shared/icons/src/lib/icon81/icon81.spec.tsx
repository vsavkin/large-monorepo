import { render } from '@testing-library/react';

import Icon81 from './icon81';

describe('Icon81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon81 />);
    expect(baseElement).toBeTruthy();
  });
});
