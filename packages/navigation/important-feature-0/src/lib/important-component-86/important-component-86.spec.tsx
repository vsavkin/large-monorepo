import { render } from '@testing-library/react';

import ImportantComponent86 from './important-component-86';

describe('ImportantComponent86', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent86 />);
    expect(baseElement).toBeTruthy();
  });
});
