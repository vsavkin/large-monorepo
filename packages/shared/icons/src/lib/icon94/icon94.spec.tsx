import { render } from '@testing-library/react';

import Icon94 from './icon94';

describe('Icon94', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon94 />);
    expect(baseElement).toBeTruthy();
  });
});
