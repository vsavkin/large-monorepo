import { render } from '@testing-library/react';

import Icon165 from './icon165';

describe('Icon165', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon165 />);
    expect(baseElement).toBeTruthy();
  });
});
