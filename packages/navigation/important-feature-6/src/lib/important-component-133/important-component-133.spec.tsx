import { render } from '@testing-library/react';

import ImportantComponent133 from './important-component-133';

describe('ImportantComponent133', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent133 />);
    expect(baseElement).toBeTruthy();
  });
});
