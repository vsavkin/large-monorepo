import { render } from '@testing-library/react';

import ImportantComponent236 from './important-component-236';

describe('ImportantComponent236', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent236 />);
    expect(baseElement).toBeTruthy();
  });
});
