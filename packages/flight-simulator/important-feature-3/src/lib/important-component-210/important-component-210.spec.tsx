import { render } from '@testing-library/react';

import ImportantComponent210 from './important-component-210';

describe('ImportantComponent210', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent210 />);
    expect(baseElement).toBeTruthy();
  });
});
