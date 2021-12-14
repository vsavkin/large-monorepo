import { render } from '@testing-library/react';

import ImportantComponent101 from './important-component-101';

describe('ImportantComponent101', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent101 />);
    expect(baseElement).toBeTruthy();
  });
});
