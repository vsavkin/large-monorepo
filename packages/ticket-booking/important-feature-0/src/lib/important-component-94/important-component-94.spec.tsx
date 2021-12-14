import { render } from '@testing-library/react';

import ImportantComponent94 from './important-component-94';

describe('ImportantComponent94', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent94 />);
    expect(baseElement).toBeTruthy();
  });
});
